import React from 'react'
import "./singlePost.css"
import single from "../../Images/comp.jpg"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={single} alt="" srcset="" className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem, ipsum dolor sit amet
                    <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i></div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Joel</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, consequatur quod! Beatae velit sit cumque officia, id magni! Optio doloribus molestias at nam pariatur tempore quo ullam totam praesentium officiis!
                    Error, labore quidem, ipsa iure a recusandae voluptate porro consequuntur eligendi consequatur odit culpa quas, ullam soluta sit praesentium autem itaque perferendis ipsam reprehenderit minus et delectus? Molestias, nostrum deleniti?
                    Velit cumque ipsam pariatur quidem quae provident nulla corrupti alias autem nisi architecto, corporis consequuntur repellat repellendus dignissimos veritatis, ut rerum sed expedita! Modi quibusdam perspiciatis voluptate quo est voluptatibus!
                    Laborum soluta est nihil ducimus unde ex necessitatibus sunt recusandae similique corporis corrupti asperiores vel, temporibus voluptate molestiae in impedit cumque itaque esse expedita placeat ullam saepe illum? Dignissimos, voluptate.
                    Repellendus labore, nisi, deserunt laudantium, vero modi possimus excepturi ex numquam adipisci mollitia impedit. Ipsum fugiat provident aut voluptas similique quam. Nam nulla quas esse iste rem, nemo sint officiis.
                    Facere inventore fugiat perferendis incidunt. Debitis harum provident atque tempore dignissimos optio labore ducimus sequi magni nesciunt! Facilis molestiae ipsum enim, et doloribus ullam, dolorem necessitatibus amet hic eaque odio.
                    Officiis iure cupiditate, commodi minus magni cumque atque fuga est sed culpa incidunt iusto exercitationem. Placeat in neque impedit qui odio! Iusto, sint corrupti! Fugit pariatur architecto culpa sit nam.
                    Reiciendis cum quasi delectus dolorem, dicta quibusdam! Veritatis quam repellat eos sequi natus odit nisi quas nobis, alias velit deleniti quia cupiditate ipsum exercitationem quidem eum. Soluta error sapiente assumenda.
                    Rem in optio ipsa veniam iure? Praesentium, quibusdam dolor id sapiente tenetur officia maiores. Incidunt fuga veniam odio. Pariatur est aliquid modi architecto asperiores ipsa sit eveniet accusantium delectus iusto?
                </p>
            </div>
        </div>
    )
}
