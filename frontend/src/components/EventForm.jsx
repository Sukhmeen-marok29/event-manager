import React, { useState, useEffect } from 'react';

const EventForm = ({ onSubmit, initialData, clearSelection }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
  });

  useEffect(() => {
    if (initialData) {
      // Format date to YYYY-MM-DD for HTML input validation
      const formattedDate = initialData.date ? initialData.date.split('T')[0] : '';
      setFormData({ ...initialData, date: formattedDate });
    } else {
      setFormData({ title: '', description: '', date: '', location: '' });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-container">
      <h3>{initialData ? '✏️ Edit Event' : '➕ Create New Event'}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            maxLength={100}
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {initialData ? 'Update Event' : 'Save Event'}
          </button>
          {initialData && (
            <button type="button" className="btn btn-secondary" onClick={clearSelection}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EventForm;