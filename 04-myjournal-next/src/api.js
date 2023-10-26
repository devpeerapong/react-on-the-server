const url = "/api/articles";

/**
 * @typedef {object} Article
 * @property {string} id
 * @property {string} title
 * @property {string} body
 * @property {string} createdAt
 */

export const api = {
  /**
   *
   * @returns {Promise<Array<Omit<Article, "body">>>}
   */
  async listArticles() {
    const result = await fetch(url);
    const json = await result.json();

    return json.data;
  },

  /**
   *
   * @param {string} id
   * @returns {Promise<Article>}
   */
  async getArticle(id) {
    const result = await fetch(`${url}/${id}`);

    const json = await result.json();

    return json.data;
  },

  /**
   *
   * @param {{ title: string; body: string }} data
   * @returns {Promise<Article>}
   */
  async createArticle(data) {
    const result = await fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });

    const json = await result.json();

    return json.data;
  },

  /**
   *
   * @param {string} id
   * @param {{ title: string; body: string; }} data
   * @returns {Promise<Article>}
   */
  async updateArticle(id, data) {
    const result = await fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });

    const json = await result.json();

    return json.data;
  },

  /**
   *
   * @param {string} id
   */
  async deleteArticle(id) {
    const result = await fetch(`${url}/${id}`, { method: "DELETE" });

    const json = await result.json();

    return json.data;
  },
};
