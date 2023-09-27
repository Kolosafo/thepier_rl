import { useRef, useEffect } from "react";

// Import components
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import PageBanner from "../components/PageBanner/PageBanner";

// Import GSAP
import { gsap, Power4 } from "gsap";

// Import SASS file
import styles from "../styles/Menu.module.scss";

function Menu() {
  // Refs
  let section = useRef(null);

  let tl = gsap.timeline({ delay: 0.3 });

  // GSAP animation
  useEffect(() => {
    // Section Animation
    tl.from(
      section.children,
      {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: Power4.easeOut,
      },
      0.2
    );
  }, [tl]);

  return (
    <>
      <Navigation />
      <PageBanner />

      <div className={styles.pageContent} ref={(e) => (section = e)}>
        <h2>Our Menu</h2>
        <hr className={styles.divider} />

        {/* Top Menu Container */}
        <div className={styles.topContainer}>
          {/* Soup & Salad Container */}
          <div className={styles.topLContainer}>
            <div className={styles.containerTitle}>
              <h4>Grilled Pier Prawns 65</h4>
              <p>
                Grilled three pieces of prawns in a sweet sauce (the pier way)
              </p>
            </div>
            <div>
              <h5>Chili Prawns</h5>
              <p>Two pieces of prawns cooked in chili sauce with vegetables</p>
              <br />

              <h5>Spicy Stir Fry Squid</h5>
              <p>Shredded squid stir fry with vegetables</p>
              <br />

              <h5>Lobster in Coconut Sauce</h5>
              <p>Grilled and cooked in Coconut sauce</p>
              <br />

              <h5>Grilled Salmon Fish With Corn Relish</h5>
              <p>Marinated with olive oil, garlic and fresh dill</p>
              <br />

              <h5>Grilled Giwa Ruwa/Sea Bass</h5>
              <p>Grilled Giwa Ruwa fillet in lemon butter sauce</p>

              <br />
            </div>
          </div>

          {/* Pasta Container */}
          <div className={styles.topRContainer}>
            <div className={styles.containerTitle}>
              <h4>Sea Food Spaghetti</h4>
              <p>
                Spaghetti cook in tomato sauce with Prawns, shrimps, calamari
              </p>
            </div>
            <div>
              <h5>Meat Ball Spaghetti</h5>
              <p>Spaghetti cooked in meat ball sauce garnished with Parsley</p>
              <br />

              <h5>Penne Alfredo</h5>
              <p>
                Penne cooked in creamy sauce served with grilled chicken breast
              </p>
              <br />

              <h5>Creamy Chicken Tagliatelle</h5>
              <p>
                Tagliatelle in cream mushroom sauce served with grilled chicken
                breast
              </p>
              <br />

              <h5>Chicken Mac and Cheese</h5>
              <p>
                Macaroni cooked in a rich tomato sauce with cheese and vegetable
                and grilled chicken breast
              </p>
              <br />

              <h5>Spicy Chicken Egg Noodles</h5>
              <p>
                Cube chicken stir fry with seasonal vegetables, sesame and
                Szechuan pepper corn
              </p>
              <br />

              {/* <h5>Riverine Soup (Full)</h5>
              <p>
                Periwinkle, prawns, shrimps, fish, slice snails, scent leaf,
                cooked with flavored spices, served with poundo yam.
              </p> */}
              <br />
            </div>
          </div>
        </div>

        {/* Bottom Menu Container
        <div className={styles.bottomContainer}>
          {/* Panini Container
          <div className={styles.bottomLContainer}>
            <div className={styles.containerTitle}>
              <h4>Owambe (Jollof rice)</h4>
              {/* <p>
                served with mixed greens salad, cup of soup, or roasted
                vegetables
              </p> 
            </div>
            <div>
              <h5> Plain Basmati Rice</h5>
              {/* <p>
                Grilled eggplant, toamto, basil, mozzarella, balsamic vinegar
                <span>(10)</span>
              </p>
              <br />

              <h5>Mashed Asaro</h5>
              {/* <p>
                Turkey breast, avocado, tomato, organic spring mix{" "}
                <span>(8)</span>
              </p> 
              <br />

              <h5>Lamb Chops</h5>
              <p>
                Grilled Marinated Lamb Chops, With A Side Of Choice, Slav Peri
                Peri Sweet Chill Jam, Parsley.
              </p>
              <br />

              <h5>Watermelon & Cucumber Juice</h5>
              <p>1/2 Pc watermelon/1 cucumber</p>
              <br />

              <h5>Margarita Pizza (Regular)</h5>
              <p>Tomato sauce, cheese and oregano</p>
              <br />
            </div>
          </div>

          Pizza Container
          <div className={styles.bottomRContainer}>
            <div className={styles.containerTitle}>
              <h4>Bistro Splash Juice</h4>
              <p>Cucumber, Celery, Apple, mint leaf, Pineapple</p>
            </div>
            <div>
              <h5>Bistro Starter Smoothie</h5>
              <p>Apple, Banana, Sweet Pear, Pineapple & Watermelon</p>
              <br />
              <h5> Catfish Pepper Soup</h5>
              <br />
              <h5>Strawberry Lemonde</h5>
              Strawberry Syrup, Lemon Juice, Sugar Syrups, Sparkling Water
              <br />
              <h5>Pineapple Parfait</h5>
              <p>Pineapple, Apple, Grapes, Berries and Low fat Yoghurt</p>
              <br />
              <h5>Lagos Beet Vibe</h5>
              <p>Beetroot, Yoghurt red apple, banana, Pineapple Smoothie</p>
              <br />
              <h5>The Pier Restaurant & Lounge Special</h5>
              <p>Spinach Banana, Green Apple, Celery Smoothie</p>
              <br />
            </div>
          </div>  */}
        {/* </div> */}
      </div>

      <Footer />
    </>
  );
}

export default Menu;
