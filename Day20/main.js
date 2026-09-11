// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token =
  "BQCdeVNbfr6GRrVHsL4LRougN-S7m6iTPAV-JOD81WmBnKR8Cai-t_v1pOvaIRNcwTQKoxNnbaa3_U3KqEkvYe0lfpfbgZ-o60EbfL2MEPkrU310OnUZHdM5JBUdmzvz42xA5jviwyTwBak69lmOJzq6IJYYh-ePAsvw7ArELpihmlBIz4Q3NOA2BCMQQTxUvIeagJPdG2_A7rF03j1a_JUFJpNEkxteapwThl4IdZAHVd36cx6ml_quVHF2Jc64k5HTQbpsdWFh8TGdJyiPRnADAG1qZgHlaLuPj4olVhFnzn9tdoWPs9rQ_LqZJ1ul3dGLCNc";
async function fetchWebApi() {
  const res = await fetch(
    `https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const body = await res.json();

  body?.images?.map((e) => {
    const img = document.createElement("img");
    img.src = e.url;
    document.body.appendChild(img);
  });
}

fetchWebApi();
