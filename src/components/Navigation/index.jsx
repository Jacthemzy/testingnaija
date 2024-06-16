import { IoMdArrowRoundBack } from "react-icons/io";
import classes from './navigation.module.css';

export default function Navigation() {
    return (
        <div className={classes.area}>
            <IoMdArrowRoundBack size={35} />
            <h1>Back</h1>
        </div>
    );
}