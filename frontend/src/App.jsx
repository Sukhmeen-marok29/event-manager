import React, { useState, useEffect } from 'react';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import { getEvents, createEvent, updateEvent, deleteEvent } from './services/api';
import './index.css';

function App() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await getEvents();
      setEvents(response.data.data);
    } catch (err) {
      setError('Failed to fetch events from server.');
    }
  };

  const handleCreateOrUpdate = async (formData) => {
    try {
      if (selectedEvent) {
        await updateEvent(selectedEvent._id, formData);
      } else {
        await createEvent(formData);
      }
      setSelectedEvent(null);
      
      // CRITICAL: Await the fresh fetch so the list renders instantly
      await fetchEvents(); 
    } catch (err) {
      setError(err.response?.data?.message || 'Error saving event.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await deleteEvent(id);
        fetchEvents();
      } catch (err) {
        setError('Could not delete event.');
      }
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📆 Event Manager Dashboard</h1>
      </header>

      {error && (
        <div className="error-banner" onClick={() => setError(null)}>
          {error} <span>×</span>
        </div>
      )}

      <main className="app-layout">
        <aside className="sidebar">
          <EventForm
            onSubmit={handleCreateOrUpdate}
            initialData={selectedEvent}
            clearSelection={() => setSelectedEvent(null)}
          />
        </aside>
        <section className="main-content">
          <h3>All Scheduled Events</h3>
          <EventList
            events={events}
            onEdit={setSelectedEvent}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </div>
  );
}

export default App;