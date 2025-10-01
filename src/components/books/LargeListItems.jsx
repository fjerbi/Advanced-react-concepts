export const LargeBookListItem = ({book}) => {
    const {name, price, title, pages} = book;

    return (
        <>
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p>Title: {title}</p>
        <p>Pages: {pages}</p>
        </>
    )
}