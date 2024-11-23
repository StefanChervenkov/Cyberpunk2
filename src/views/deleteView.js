import { remove } from "../api/itemsApi";
import page from "../../lib/page.js";

export default async function deleteView(ctx) {
    const itemId = ctx.params.itemId; v
    const isConfimed = confirm('Are you sure you want to delete the item?');

    if (!isConfimed) {
        return;
    }

    try {
        await remove(itemId);
        page.redirect('/dashboard');

    } catch (error) {
        alert(error.message);
    }
}
