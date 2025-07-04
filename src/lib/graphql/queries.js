import { ApolloClient, ApolloLink, concat, InMemoryCache, createHttpLink, gql } from "@apollo/client";
import { getAccessToken } from "../auth";

const httpLink = createHttpLink({ uri: 'https://job-board-server-mq1m.onrender.com' });

const authLink = new ApolloLink((operation, forward) => {
    const accessToken = getAccessToken();

    if (accessToken) {
        operation.setContext({
            headers: { 'Authorization': `Bearer ${accessToken}` },
        });
    }

    return forward(operation);
})

export const apolloClient = new ApolloClient({
    link: concat(authLink, httpLink),
    cache: new InMemoryCache(),
});

const jobDetailFragment = gql`
    fragment JobDetail on Job {
        id
        date
        title
        company {
            id
            name
        }
        description
    }
`;

export const companyByIdQuery = gql`
    query CompanyById($id: ID!) {
        company(id: $id) {
            id
            name
            description
            jobs {
                id
                date
                title
            }
        }
    }
`;

export const jobByIdQuery = gql`
    query JobById($id: ID!) {
        job(id: $id) {
            ...JobDetail
        }
    }

    ${jobDetailFragment}
`;

export const jobsQuery = gql`
    query Jobs($limit: Int, $offset: Int) {
        jobs(limit: $limit, offset: $offset) {
            items {
                id
                date
                title
                company {
                    id
                    name
                }
            }
            totalCount
        }
    }        
`;

export const createJobMutation = gql`
    mutation CreateJob($input: CreateJobInput!) {
        job: createJob(input: $input) {
            ...JobDetail
        }
    }

    ${jobDetailFragment}
`;

// export async function createJob({ title, description }) {
//     const { data } = await apolloClient.mutate({
//         mutation: createJobMutation,
//         variables: { input: { title, description } },
//         update: (cache, { data }) => {
//             cache.writeQuery({
//                 query: jobByIdQuery,
//                 variables: { id: data.job.id },
//                 data,
//             });
//         },
//     });
//     return data.job;
// }

// export async function getCompany(id) {
//     const { data } = await apolloClient.query({
//         query: companyByIdQuery,
//         variables: { id },
//     });
//     return data.company;
// }

// export async function getJob(id) {
//     const { data } = await apolloClient.query({
//         query: jobByIdQuery,
//         variables: { id },
//     });
//     return data.job;
// }

// export async function getJobs() {
//     const query = gql`
//         query Jobs {
//             jobs {
//                 id
//                 date
//                 title
//                 company {
//                     id
//                     name
//                 }
//             }
//         }        
//     `;

//     const { data } = await apolloClient.query({
//         query,
//         fetchPolicy: 'network-only',
//     });
//     return data.jobs;
// }