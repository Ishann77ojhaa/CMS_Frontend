import React, { useState } from "react";
import "./CreateBlog.css";
import NavBar from "../../Components/Navbar/Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    Title: "",
    SubTitle: "",
    Description: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (e) =>
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const createblog = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:3000/createblogs",
        data,
      );
      if (response.status >= 200 && response.status < 300) navigate("/");
    } catch {
      setError(
        "Could not save your article. Check that your backend is running and try again.",
      );
    } finally {
      setSaving(false);
    }
  };
  return (
    <div className="app-shell">
      <NavBar />
      <main className="page-wrap form-layout">
        <Link to="/" className="back-link">
          ← &nbsp; Back to your library
        </Link>
        <section className="page-heading">
          <div>
            <div className="eyebrow">THE WRITING DESK / 02</div>
            <h1>
              Make something meaningful
              <span style={{ color: "#a1bd4c" }}>.</span>
            </h1>
            <p>Get the first draft out of your head and onto the page.</p>
          </div>
        </section>
        <form className="form-panel" onSubmit={createblog}>
          <h2>New article</h2>
          <p className="form-intro">
            No pressure to get it perfect. You can always come back and refine
            your words.
          </p>
          {error && <div className="toast-error">{error}</div>}
          <div className="form-grid">
            <div className="field full">
              <label htmlFor="Title">
                Article title <span style={{ color: "#9da095" }}>*</span>
              </label>
              <input
                required
                maxLength={160}
                id="Title"
                name="Title"
                value={data.Title}
                onChange={handleChange}
                placeholder="Give your idea a name…"
              />
              <span className="field-hint">
                A clear title helps your idea find its people.
              </span>
            </div>
            <div className="field full">
              <label htmlFor="SubTitle">
                Subtitle{" "}
                <span style={{ color: "#9da095", fontWeight: 400 }}>
                  (optional)
                </span>
              </label>
              <input
                id="SubTitle"
                name="SubTitle"
                value={data.SubTitle}
                onChange={handleChange}
                placeholder="A little more context, if you need it…"
              />
            </div>
            <div className="field full">
              <label htmlFor="Description">
                Your story <span style={{ color: "#9da095" }}>*</span>
              </label>
              <textarea
                required
                id="Description"
                name="Description"
                value={data.Description}
                onChange={handleChange}
                placeholder="Start anywhere. The opening line, the big idea, the thing you can’t stop thinking about…"
              />
              <span className="field-hint">
                {data.Description.trim()
                  ? data.Description.trim().split(/\s+/).length
                  : 0}{" "}
                words · Take your time.
              </span>
            </div>
          </div>
          <div className="form-actions">
            <Link to="/" className="secondary-btn">
              Cancel
            </Link>
            <button className="primary-btn" type="submit" disabled={saving}>
              {saving ? "Saving…" : "Save article"} &nbsp; ↗
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
export default CreateBlog;
