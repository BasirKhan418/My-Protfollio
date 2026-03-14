export type HashnodePost = {
  title: string;
  brief: string;
  url: string;
  publishedAt: string;
  tags: string[];
  coverImage?: string;
};

const HASHNODE_ENDPOINT = "https://gql.hashnode.com";

function normalizeHost(host: string) {
  return host.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export async function getHashnodePosts() {
  const host =
    process.env.HASHNODE_PUBLICATION_HOST ||
    process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST;

  if (!host) {
    return [] as HashnodePost[];
  }

  const query = `
    query PublicationPosts($host: String!) {
      publication(host: $host) {
        posts(first: 12) {
          edges {
            node {
              title
              brief
              url
              publishedAt
              coverImage {
                url
              }
              tags {
                name
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(HASHNODE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          host: normalizeHost(host),
        },
      }),
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      return [] as HashnodePost[];
    }

    const data = await response.json();
    const edges = data?.data?.publication?.posts?.edges ?? [];

    return edges.map((edge: any) => ({
      title: edge.node.title,
      brief: edge.node.brief,
      url: edge.node.url,
      publishedAt: edge.node.publishedAt,
      tags: (edge.node.tags ?? []).map((tag: { name: string }) => tag.name),
      coverImage: edge.node.coverImage?.url,
    })) as HashnodePost[];
  } catch {
    return [] as HashnodePost[];
  }
}
