import AccountContent from "../../components/accountDetails/AccountContent"
import { useDispatch, useSelector } from "react-redux"
import { getUserInfo } from "../../redux/userSlice"
import { useEffect } from "react"

const Accounts = () => {
    const dispatch = useDispatch();
    const { status, data } = useSelector((state) => state.user);
    // console.log(data);

    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch]);


    return (
        <section className="grid mx-auto">
            <div>
                {status}
                <br />
                {data.name}
            </div>
            <AccountContent />
        </section>
    )

}
export default Accounts