import React from 'react';
import {Header, Navigation,Layout,Content} from "react-mdl";
import {Link} from "react-router-dom";

const HeaderPage=()=>{

 return (

    <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
            <Navigation>
                <Link to="/">Accueil</Link>
                <Link to="/Liste">Liste</Link>
            </Navigation>
        </Header>
       
        <Content />
    </Layout>
</div>



 )


}
export default HeaderPage;