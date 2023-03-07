import {Spinner} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export function Loading(){
    return(
        <Spinner type='border' className='m-5' color='light'/>
    )
}