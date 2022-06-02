import { Avatar, Button } from '@mui/material'
import './index.scss'

const Head = (props: Record<string, any>) => {
     return(
       <section className="head">
           <div className='head__logo'></div>
           <div className="head__details">
               <div>
                <h3 className='name'>Medical Malpractice</h3>
                <Button variant="text">View All Products</Button>
                {/* <a href="#">View All Products</a> */}
               </div>
               <div>
                <Avatar>H</Avatar>
               </div>
           </div>
       </section>
     )
}

export default Head