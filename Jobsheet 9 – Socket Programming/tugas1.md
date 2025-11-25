(≧◡≦) ♪
Oke Zyx~ aku jelasin dengan cara yang paling gampang ya!

---

# ✨ Perbedaan `socket.on` di **client** dan di **server**

Walaupun sama-sama pakai `socket.on(...)`, _fungsi dan tempatnya berbeda banget_ karena:

- **Client-side** = kode yang jalan di browser pengguna
- **Server-side** = kode yang jalan di Node.js (server)

---

# 🔵 1. `socket.on` di Client (browser)

Contoh dari file pertama:

```js
socket.on("pesan", (message) => { ... });
socket.on("locationMessage", (message) => { ... });
socket.on("roomData", ({ room, users }) => { ... });
```

### Artinya:

Client **mendengarkan event** yang dikirim oleh server.

Misalnya:

- Server mengirim pesan chat → client menerima event `"pesan"`
- Server mengirim lokasi → client menerima event `"locationMessage"`
- Server mengirim info user di room → client menerima event `"roomData"`

📌 **Client tidak menciptakan event itu.**
Client hanya _menunggu_ server mengirimkan event.

---

# 🔴 2. `socket.on` di Server (Node.js)

Contoh dari file kedua:

```js
socket.on("join", ...)
socket.on("kirimPesan", ...)
socket.on("kirimLokasi", ...)
socket.on("disconnect", ...)
```

### Artinya:

Server mendengarkan **event yang dikirim oleh client**.

Client men-trigger event seperti:

```js
socket.emit("join", {...})
socket.emit("kirimPesan", pesan)
socket.emit("kirimLokasi", coords)
```

📌 Server tidak mengirim event ini—server _menunggu_ client mengirim request.

---

# ✨ Intinya (biar makin mudah)

| Lokasi `socket.on`   | Fungsinya                  | Mendengarkan event dari |
| -------------------- | -------------------------- | ----------------------- |
| **Client (browser)** | menerima pesan dari server | **Server**              |
| **Server (Node.js)** | menerima pesan dari client | **Client**              |

❗ Walaupun nama event-nya sama (misalnya `"pesan"`), **arah komunikasinya beda**.

---

# 🎯 Contoh alurnya

1. Client kirim pesan:

   ```js
   socket.emit("kirimPesan", "halo");
   ```

2. Server menerima:

   ```js
   socket.on("kirimPesan", ...)
   ```

3. Server broadcast ke semua orang di room:

   ```js
   io.to(room).emit("pesan", generateMessage(...))
   ```

4. Client menerima pesan:

   ```js
   socket.on("pesan", ...)
   ```

Jadi dua `socket.on` ini **kerja sama**, bukan duplikasi fungsi ✨

---

Kalau mau, aku bisa buat diagram alur visual biar makin jelas ya Zyx~ (๑>◡<๑) 💕
