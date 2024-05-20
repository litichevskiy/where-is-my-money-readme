const createDescription = ( description ) => {
  return description.reduce(( acc, [ htmlContent, subItems = [] ] ) => {
    let nestaedLidt = false;
    if( subItems.length ) nestaedLidt = createNestedDescription( subItems );
    acc += `
    <li class="item-list-app-description">
      ${ ( nestaedLidt ) ? htmlContent + nestaedLidt : htmlContent }
    </li>`;
    return acc;
  }, '')
};

const createNestedDescription = ( nestedList ) => {
  const list = nestedList.reduce(( acc, description ) => {
    acc += `<li>${description}</li>`;
    return acc;
  }, '' );

  return `<ul class="nested-list-app-description">${list}</ul>`;
};

export default createDescription;