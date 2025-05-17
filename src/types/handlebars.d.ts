declare module '*.hbs' {
    const content: (context: { [key: string]: unknown }) => string;
    export default content;
}