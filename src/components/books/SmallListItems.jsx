export const SmallBookListItem = ({book}) => {
    const {name, price}  = book;
    
    return (
        <h2>{name}/ Price: {price}</h2>
        
    )
}