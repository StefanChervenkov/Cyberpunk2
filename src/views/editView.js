import { render, html } from "../../lib/lit-html.js";
import { edit, getOne } from "../api/itemsApi.js";
import page from "../../lib/page.js";
const template = (item, onSubmit) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form form-item">
          <h2>Edit Your Item</h2>
          <form @submit=${onSubmit} class="edit-form">
            <input type="text" value=${item.item} name="item" id="item" placeholder="Item" />
            <input type="text" value=${item.imageUrl} name="imageUrl" id="item-image" placeholder="Your item Image URL" />
            <input type="text" value=${item.price} name="price" id="price" placeholder="Price in Euro" />
            <input type="text" value=${item.availability} name="availability" id="availability" placeholder="Availability Information" />
            <input type="text" value=${item.type} name="type" id="type" placeholder="Item Type" />
            <textarea id="description" name="description" placeholder=${item.description} rows="10"
              cols="50"></textarea>
            <button type="submit">Edit</button>
          </form>
        </div>
      </section>
`;

export default async function editView(ctx) {
  const itemId = ctx.params.itemId;
  const item = await getOne(itemId);



  render(template(item, editFormSubmitHandler.bind(ctx)));

}

async function editFormSubmitHandler(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData);
  const itemId = this.params.itemId;

  try {
    await edit(itemId, data);

    page.redirect(`/dashboard/${itemId}/details`);
  } catch (error) {
    alert(error.message)
  }






}
