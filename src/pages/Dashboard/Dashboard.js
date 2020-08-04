import React, { useEffect } from 'react';
import style from './styles.scoped.css';
import { fetchDashboard } from './actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDashboard());
  },[]);
  const { data } = useSelector(s => s.dashboard);
  return (
    <section className={style.root}>
      <div className={style.div}>
        <h4>Dashboard</h4>
        <section>
          <h4>Selamat Datang kembali LogeeTrans.</h4>
          <p>Solusi untuk mengoptimalkan segala kebutuhan logistik
            perusahaan di seluruh Indonesia.</p>
        </section>
        <section>
          <h5>Total Transaksi</h5>
          <div />
        </section>
      </div>
      <aside className={style.menu}>
        <h5>LogeeTrans in Numbers</h5>
        <section>
          <h2>{data.cargoOwners}</h2>
          <img src="/assets/ic-cargo.svg" />
          <h5>Customer (Cargo Owner)</h5>
        </section>
        <section>
          <h2>{data.truckers}</h2>
          <img src="/assets/ic-truck.svg" />
          <h5>Mitra (Truck Owner)</h5>
        </section>
        <section>
          <h5>Jumlah Supir & Kernet</h5>
          <h5>{data.drivers}</h5>
        </section>
        <section>
          <h5>Jumlah Kendaraan</h5>
          <h5>{data.vehicles}</h5>
        </section>
        <section>
          <h5>Total Order</h5>
        </section>
        <section>
          <h6>Order per Hari</h6>
          <h4>{data.todayOrder}</h4>
          <h6>Order per Minggu</h6>
          <h4>{data.weekToDateOrder}</h4>
          <h6>Order per Bulan</h6>
          <h4>{data.monthToDateOrder}</h4>
        </section>
      </aside>
    </section>
  );
}

