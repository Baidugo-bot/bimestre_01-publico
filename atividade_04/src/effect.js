import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Effect(){

    const [posts, setPosts] = useState ([]);

    useEffect (() => {
        axios.get('https://api.github.com/orgs/rocketseat/repos')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (


        <div>

            <h1>Lista de repositorios</h1>

            <ul>{
                
                posts.map(
                    post => (
                        <p>

                            <h2 >{post.name}</h2>
                            <p/>
                            {post.description}
                            <p/>
                            <a style={{color: 'fuschia'}} href={post.html_url}>Acesssar repositorio</a>

                            </p>
                    ))}</ul>

        </div>

    )

}

export default Effect