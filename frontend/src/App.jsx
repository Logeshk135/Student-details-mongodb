import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", age: "", course: "" });

  const API = import.meta.env.VITE_BACKEND_SERVER_URL;

  // Load students
const loadStudents = async () => {
  try {
    const res = await axios.get(API);
    setStudents(res.data);
  } catch (err) {
    console.error(err);
  }
};

useEffect(() => {
  loadStudents();
}, []);


  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async e => {
  e.preventDefault();
  try {
    const payload = { ...form, age: form.age ? Number(form.age) : undefined };

    const res = await axios.post(API, payload);

    // Frontend state update instantly without reload
    setStudents(prev => [...prev, res.data]);

    // Clear form
    setForm({ name: "", age: "", course: "" });
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
};

const markCompleted = async id => {
  try {
    await axios.patch(`${API}/${id}`, { status: "completed" });
    setStudents(prev =>
      prev.map(s => (s._id === id ? { ...s, status: "completed" } : s))
    );
  } catch (err) {
    console.error(err);
  }
};

const deleteStudent = async id => {
  try {
    await axios.delete(`${API}/${id}`);
    setStudents(prev => prev.filter(s => s._id !== id));
  } catch (err) {
    console.error(err);
  }
};


  const filterMERN = async () => {
    const res = await axios.get(`${API}?course=MERN%20Stack`);
    setStudents(res.data);
  };

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🧑‍🎓 Student Details</h1>

      {/* Add Form */}
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-fuchsia-900 p-6 rounded-xl mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Student</h2>
        <input
  type="text"
  name="name"
  placeholder="Name"
  value={form.name}
  onChange={handleChange}
  className="w-full p-2 mb-2 rounded text-white"
  required
/>

        <input type="number" name="age" placeholder="Age" value={form.age} onChange={handleChange} className="w-full p-2 mb-2 rounded text-white" />
        <input type="text" name="course" placeholder="Course" value={form.course} onChange={handleChange} className="w-full p-2 mb-4 rounded text-white" />
        <button type="submit" className="w-full bg-blue-600 p-2 rounded font-semibold">Add Student</button>

      </form>

      {/* Filter buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button onClick={filterMERN} className="bg-green-600 px-4 py-2 rounded">MERN Only</button>
        <button onClick={loadStudents} className="bg-yellow-600 px-4 py-2 rounded">Show All</button>
      </div>

      {/* Students Display */}
      <div className="grid gap-4 max-w-3xl mx-auto">
        {students.map((s, index) => (
          <div key={s._id || index} className="bg-amber-200 p-4 rounded-xl flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">{s.name}</h3>
              <p>Age: {s.age}</p>
              <p>Course: {s.course}</p>
              <p>Status: {s.status}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => markCompleted(s._id)} className="bg-blue-500 px-3 py-1 rounded">✔ Complete</button>
              <button onClick={() => deleteStudent(s._id)} className="bg-red-600 px-3 py-1 rounded">🗑 Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
