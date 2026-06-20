import React from 'react';
import { Calendar, MapPin, Trash2, Edit } from 'lucide-react';

const EventList = ({ events, onEdit, onDelete }) => {
  if (events.length === 0) {
    return <p className="no-events">No events scheduled yet. Create one on the left!</p>;
  }

  return (
    <div className="events-grid">
      {events.map((event) => (
        <div key={event._id} className="event-card">
          <div className="event-card-header">
            <h4>{event.title}</h4>
            <div className="card-actions">
              <button onClick={() => onEdit(event)} className="icon-btn edit-btn" title="Edit">
                <Edit size={16} />
              </button>
              <button onClick={() => onDelete(event._id)} className="icon-btn delete-btn" title="Delete">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
          <p className="event-desc">{event.description}</p>
          <div className="event-meta">
            <span className="meta-item">
              <Calendar size={14} />
              {new Date(event.date).toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </span>
            <span className="meta-item">
              <MapPin size={14} />
              {event.location}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;