import React from 'react'
import logo from './tvmlogo.png'
export const cartItemDetail = (props) => {
    return (
        <div>
            {console.log(props.match.id)}
            <div class="imgfull p-1 pl-2 pr-2">
                <img src="https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg" alt={logo} />
            </div>
            <div className='text-left text-white m-3 '>

            <h2 >Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, adipisci sunt. Officiis, beatae suscipit? Libero laboriosam suscipit dignissimos commodi quibusdam sapiente veniam? Sapiente sunt totam harum laboriosam labore alias ratione, velit corrupti ut consequatur laborum rerum unde architecto excepturi, ad nihil quasi culpa sit minima nostrum dolor voluptatibus fuga. Libero! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore atque aut, hic error maxime nobis quidem tempora earum. Provident maiores beatae eveniet, mollitia labore laudantium porro fugit illo eius repudiandae, quam esse explicabo earum debitis alias at assumenda saepe voluptate.</p>
            <p><span>Language :</span> Frama</p>
            </div>
        </div>
    )
}
