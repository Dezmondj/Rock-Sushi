import { useMemo } from "react";
import Link from "next/link";

import headerStyles from "./header.module.css";

export const Header = ({ basket, openBasketModal }) => {
  const count = useMemo(() => {
    return Object.values(basket).reduce((sum, item) => sum + item.count, 0);
  }, [basket]);

  return (
    <header className={headerStyles.base}>
      <div className={headerStyles.logodiv}> 
				<img src="images/cutlogo2.png" className={headerStyles.logoimg} />
			</div>
      <div className={headerStyles.banner}>
        <h1 className={headerStyles.logoName}>Rock sushi</h1>
      </div>
      <section className={headerStyles.navPanel}>
        <div className={headerStyles.ourInfo}>
          <div className={headerStyles.ourInfoLeftColumn}>
            <Link href="/address" className={headerStyles.link}>
              Адреса
            </Link>
            <Link href="/contacts" className={headerStyles.link}>
              Контакти
            </Link>
          </div>
          <button
            onClick={openBasketModal}
            className={headerStyles.basketContainer}
          >
            Кошик
            {count !== 0 && (
              <div className={headerStyles.basketCounter}>{count}</div>
            )}
          </button>
        </div>
        <div className={headerStyles.secondaryNav}>
          <Link href="/about" className={headerStyles.secondaryLink}>
            Про нас
          </Link>
          <Link href="/sushi-sets" className={headerStyles.secondaryLink}>
            Сети
          </Link>
          <Link href="/sushi-sets" className={headerStyles.secondaryLink}>
            Роли
          </Link>
          <Link href="/sushi-sets" className={headerStyles.secondaryLink}>
            Локшина
          </Link>
          <Link href="/sushi-sets" className={headerStyles.secondaryLink}>
            Супи
          </Link>
          <Link href="/sushi-sets" className={headerStyles.secondaryLink}>
            Бургери
          </Link>
        </div>
      </section>
    </header>
  );
};
