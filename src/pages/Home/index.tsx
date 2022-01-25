import React from 'react';
import { AiFillNotification } from 'react-icons/ai';

import styles from './styles.module.scss';

export function Home() {


  return (
    <div className={styles.container}>
      <div className={styles.apartments}>
        <div className="header">
          <div>
            <h3>
              Apartments in New York
            </h3>
            <h6>1248 results • Jul 14 - 21</h6>
          </div>
          <div>
            Roomates
          </div>
        </div>

        <div>
          <div className={styles.apartment}>
            <div className="">
              <img className={styles.apartmentImg} src="https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className={styles.apartmentDetails}>
              <h4>The People's Brownstone</h4>
              <h6><AiFillNotification /> 1995 Broadway, New York</h6>
              <p>Wifi • Air conditioning • Kitchen • Heating • Smokers
                • Parking • Balcony • Animal friendly</p>

            </div>
          </div>
        </div>
      </div>
      <div className="">Mapa</div>
    </div>
  );
}