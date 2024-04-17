// server/metadata.js
export default async function getMetadata() {
    // Fetch data or define metadata here
    const title = "Md Abdullah";
    const description = "Personal Portfolio";
  
    return {
      props: {
        metadata: {
          title,
          description,
        },
      },
    };
  }
  