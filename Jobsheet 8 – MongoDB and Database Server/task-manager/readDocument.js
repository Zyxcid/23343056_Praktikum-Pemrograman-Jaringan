const { MongoClient, ObjectId } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const namaDatabase = "task-manager";

async function main() {
  try {
    await client.connect();
    console.log("Berhasil terhubung ke MongoDB database server");

    const db = client.db(namaDatabase);

    // Cari berdasarkan nama
    const byNama = await db.collection("pengguna").findOne({ nama: "Randi" });

    // Cari berdasarkan ObjectId
    const byObjectID = await db
      .collection("pengguna")
      .findOne({ _id: new ObjectId("6902ad888a3432bd1b479064") });

    // Cari semua pengguna dengan usia 25
    const toArray = await db
      .collection("pengguna")
      .find({ usia: 25 })
      .toArray();

    if (byNama || byObjectID || (toArray && toArray.length > 0)) {
      console.log("Data Pengguna ditemukan (berdasarkan nama):", byNama);
      console.log(
        "Data Pengguna ditemukan (berdasarkan ID Objek):",
        byObjectID
      );
      console.table(toArray);
    } else {
      console.log("Data Pengguna tidak ditemukan");
    }
  } catch (err) {
    console.error("Terjadi kesalahan:", err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
