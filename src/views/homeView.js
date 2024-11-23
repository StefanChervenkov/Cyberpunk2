import { render, html } from "../../lib/lit-html.js";

const template = () => html`
    <h1>Home page</h1>
`;

export default async function homeView(ctx) {
    //TODO: Implement this view

    render(template());

}