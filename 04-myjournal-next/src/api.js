const url = "/api/articles";

/**
 * @typedef {object} Article
 * @property {string} id
 * @property {string} title
 * @property {string} body
 * @property {string} createdAt
 */

/**
 *
 * @returns {Promise<Array<Omit<Article, "body">>>}
 */
export async function listArticles() {
  const result = await fetch(url);
  const json = await result.json();

  return json.data;
}

/**
 *
 * @param {string} id
 * @returns {Promise<Article>}
 */
export async function getArticle(id) {
  const result = await fetch(`${url}/${id}`);

  const json = await result.json();

  return json.data;
}

/**
 *
 * @param {{ title: string; body: string }} data
 * @returns {Promise<Article>}
 */
export async function createArticle(data) {
  const result = await fetch(`${url}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
  });

  const json = await result.json();

  return json.data;
}

/**
 *
 * @param {string} id
 * @param {{ title: string; body: string; }} data
 * @returns {Promise<Article>}
 */
export async function updateArticle(id, data) {
  const result = await fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
  });

  const json = await result.json();

  return json.data;
}

/**
 *
 * @param {string} id
 */
export async function deleteArticle(id) {
  const result = await fetch(`${url}/${id}`, { method: "DELETE" });

  const json = await result.json();

  return json.data;
}
