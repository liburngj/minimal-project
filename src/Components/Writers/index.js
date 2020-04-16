import React, { Fragment } from 'react'
import { Link, Route} from 'react-router-dom'
import Writer from './Writer'
/*<ul>{
    writers.map(({ id, name}) =>
        <li key={id}>
        <Link to={`${url}/${id}`}>{name}
        </Link>
        </li>)}
</ul>*/
export default ({ match: { url } , writers}) =>
<Fragment>
<Route path={`${url}/:writerId`} render={
    ({match}) => <Writer  {...writers.find(writer =>writer.id ===match.params.writerId)}/>}/>
</Fragment>