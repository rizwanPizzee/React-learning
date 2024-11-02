import PropTypes from 'prop-types';
function List(props){
    const category = props.category;
    const listOfItems = props.items;
    const itemsList = listOfItems.map((values) =>
                <li key={values.id}>{values.name}: &nbsp; <b>{values.calories}</b></li>);

    return( <>
                <h3 className="category-list">{category}</h3>
                <ol className="itemsList-list">{itemsList}</ol>
            </> 
    );

}
List.defaultProps = {
    items: [],
    category: "Category"
};

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    })),
    category: PropTypes.string
};

export default List;