const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// 1. Get all events
export const getEvents = async () => {
  try {
    const response = await fetch(`${API_URL}/api/events`);
    if (!response.ok) throw new Error('Failed to fetch events');
    return await response.json();
  } catch (error) {
    console.error("Error in getEvents:", error);
    throw error;
  }
};

// Alternate alias support for App.jsx
export const fetchEvents = getEvents;

// 2. Create a new event
export const createEvent = async (eventData) => {
  try {
    const response = await fetch(`${API_URL}/api/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });
    if (!response.ok) throw new Error('Failed to create event');
    return await response.json();
  } catch (error) {
    console.error("Error in createEvent:", error);
    throw error;
  }
};

// 3. Update an event
export const updateEvent = async (eventId, updatedData) => {
  try {
    const response = await fetch(`${API_URL}/api/events/${eventId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) throw new Error('Failed to update event');
    return await response.json();
  } catch (error) {
    console.error("Error in updateEvent:", error);
    throw error;
  }
};

// 4. Delete an event
export const deleteEvent = async (eventId) => {
  try {
    const response = await fetch(`${API_URL}/api/events/${eventId}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete event');
    return await response.json();
  } catch (error) {
    console.error("Error in deleteEvent:", error);
    throw error;
  }
};