import Image from "next/image";
import styles from "../../../ui/dashboard/product/singleProduct/singleProduct.module.css";

const SingleProduct = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/user.png" alt="" fill />
        </div>
        IPhone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="IPhone" />
          <label>Price</label>
          <input type="number" name="price" placeholder="$34" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="23" />
          <label>Color</label>
          <input type="text" name="color" placeholder="black" />
          <label>Size</label>
          <input type="text" name="size" placeholder="medium" />
          <label>Category</label>
          <select name="category" id="category">
            <option value="laptop">Laptop</option>
            <option value="computer">Computer</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="16"
            placeholder="description"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProduct;
