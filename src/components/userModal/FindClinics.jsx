// src/components/userModal/ClinicsModal.jsx
import { useEffect, useState } from "react";
import styles from "../../csss/componentCss/ClinicsModal.module.css";
import closeIcon from "../../assets/iacons/close.svg";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// إصلاح مشكلة أيقونة الماركر (Leaflet + Vite)
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import api from "../../api/axios";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function ClinicsModal({ onClose }) {
  const [position, setPosition] = useState(null); // {lat, lng}
  const [clinics, setClinics] = useState([]);
  const [meta, setMeta] = useState({ searchRadiusKm: 40 , expanded: false });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // 1) نجيب موقع المستخدم (GPS) من المتصفح
  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported on this device.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      () => {
        setError("Location permission denied. Please enable it and try again.");
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);

  // 2) لما يصير عندي lat/lng، أطلب العيادات من الباك
  useEffect(() => {
    if (!position) return;

    const fetchClinics = async () => {
      try {
        setLoading(true);
        setError("");

        const { data } = await api.post("/api/clinics/nearby", {
          lat: position.lat,
          lng: position.lng,
        });

        if (!data?.success) {
          setError(data?.message || "Failed to fetch nearby clinics.");
          setClinics([]);
          setLoading(false);
          return;
        }

        setClinics(data.clinics || []);
        setMeta({
          searchRadiusKm: data.searchRadiusKm ?? 5,
          expanded: !!data.expanded,
        });
      } catch (err) {
        setError(
          err?.response?.data?.message || "Failed to fetch nearby clinics."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchClinics();
  }, [position]);
  console.log("Clinics:", clinics);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <img src={closeIcon} width="28" alt="close" />
        </button>

        <h2 className={styles.title}>Nearby Clinics</h2>
        <p className={styles.subTitle}>
          Showing results within <strong>{meta.searchRadiusKm} km</strong>
          {meta.expanded ? " (expanded automatically)" : ""}
        </p>

        {loading && <div className={styles.info}>Loading map...</div>}

        {!loading && error && (
          <div className={styles.errorBox}>{error}</div>
        )}

        {!loading && !error && position && (
          <div className={styles.mapWrap}>
            <MapContainer
              center={[position.lat, position.lng]}
              zoom={12}
              scrollWheelZoom={true}
              className={styles.map}
            >
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* ماركر للمستخدم */}
              <Marker position={[position.lat, position.lng]}>
                <Popup>Your Location</Popup>
              </Marker>

              {/* ماركرز العيادات */}
              {clinics.map((c) => (
                <Marker key={c.id} position={[c.lat, c.lng]}>
                  <Popup>
                    <strong>{c.name}</strong>
                    <br />
                    {c.type} — {c.address}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          
        )
        }

        {!loading && !error && clinics.length === 0 && position && (
          <div className={styles.info}>
            No clinics found near you right now.
          </div>
        )}
      </div>
    </div>
  );
}
