import Image from "next/image";
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css";

const SingleUser = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/user.png" alt="" fill />
        </div>
        Ebenezer Mulu
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Ebenezer" />
          <label>Email</label>
          <input type="email" name="email" placeholder="e@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" placeholder="" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+456777755" />
          <label>Address</label>
          <input type="text" name="address" placeholder="Addis Ababa" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUser;
