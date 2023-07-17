import { useDispatch, useSelector } from "react-redux";
import TransferContent from "../../components/ModalNewTransfer/TransferContent"
import { useEffect } from "react";
import { getContacts } from "../../redux/userSlice";
const Transfer = () => {
    const dispatch = useDispatch();
    const { status, data } = useSelector((state) => state.user);
    console.log(status, data);
    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);
    return (
        <section className="grid w-full">
            <TransferContent />
        </section>
    )

}
export default Transfer