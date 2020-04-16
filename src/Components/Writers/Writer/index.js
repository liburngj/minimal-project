import React, { Fragment } from 'react'

export default ({ match, id,born,deceased, name, description, image }) =>
<Fragment>
<div>

<h1>{name}</h1>

<h3>
{born} &mdash; {deceased} 
</h3>

<p>
{description}
</p>

<img src={image} alt={name} style={{maxWidth:300}}/>

</div>
</Fragment>