
const actionRootCategories = () => async dispatch => {
    try {

        const rootCategories = await dispatch(actionCategoryRootFind());


        if (rootCategories && rootCategories.length > 0) {

            dispatch(actionSetRootCategories(rootCategories));
        } else {

            console.error('Root categories not received.');
        }
    } catch (error) {

        console.error('Error fetching root categories:', error);
    }
}


const actionGetCategoryById = (categoryId) => async dispatch => {
    try {

        const category = await dispatch(actionCategoryFindById(categoryId));


        if (category) {

            dispatch(actionSetCurrentCategory(category));
        } else {

            console.error('Category not received.');
        }
    } catch (error) {

        console.error('Error fetching category:', error);
    }
}


export { actionRootCategories, actionGetCategoryById };
