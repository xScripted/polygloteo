-- Activar campos vectoriales ---
CREATE EXTENSION IF NOT EXISTS vector;


-- Autoupdate de los campos updated_at  - EJECUTAR UNA VEZ EN UNA DDBB NUEVA

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- Lead
CREATE TRIGGER trigger_set_updated_at_lead
BEFORE UPDATE ON lead
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- User
CREATE TRIGGER trigger_set_updated_at_user
BEFORE UPDATE ON "user"
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- Agent
CREATE TRIGGER trigger_set_updated_at_agent
BEFORE UPDATE ON agent
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- Session
CREATE TRIGGER trigger_set_updated_at_session
BEFORE UPDATE ON session
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- Property
CREATE TRIGGER trigger_set_updated_at_property
BEFORE UPDATE ON property
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- Event
CREATE TRIGGER trigger_set_updated_at_event
BEFORE UPDATE ON event
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- EventAgent
CREATE TRIGGER trigger_set_updated_at_event_agent
BEFORE UPDATE ON event_agent
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- Contact
CREATE TRIGGER trigger_set_updated_at_contact
BEFORE UPDATE ON contact
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- SessionContact
CREATE TRIGGER trigger_set_updated_at_session_contact
BEFORE UPDATE ON session_contact
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- QRUrl
CREATE TRIGGER trigger_set_updated_at_qr_url
BEFORE UPDATE ON qr_url
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- QRMetadata
CREATE TRIGGER trigger_set_updated_at_qr_metadata
BEFORE UPDATE ON qr_metadata
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- Pactos
CREATE TRIGGER trigger_set_updated_at_pactos
BEFORE UPDATE ON pactos
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- Mortgage
CREATE TRIGGER trigger_set_updated_at_mortgage
BEFORE UPDATE ON mortgage
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- PersonalShopper
CREATE TRIGGER trigger_set_updated_at_personal_shopper
BEFORE UPDATE ON personal_shopper
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- Reform
CREATE TRIGGER trigger_set_updated_at_reform
BEFORE UPDATE ON reform
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- Service
CREATE TRIGGER trigger_set_updated_at_operation
BEFORE UPDATE ON operation
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();


-- Service
CREATE TRIGGER trigger_set_updated_at_service
BEFORE UPDATE ON service
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ServiceContact
CREATE TRIGGER trigger_set_updated_at_service_contact
BEFORE UPDATE ON service_contact
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- Counter
CREATE TRIGGER trigger_set_updated_at_counter
BEFORE UPDATE ON counter
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- Denuncia
CREATE TRIGGER trigger_set_updated_at_denuncia
BEFORE UPDATE ON denuncia
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- Notification
CREATE TRIGGER trigger_set_updated_at_notification
BEFORE UPDATE ON notification
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();


-- FollowUp
CREATE TRIGGER trigger_set_updated_at_follow_up
BEFORE UPDATE ON follow_up
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();


-- Contracts
CREATE TRIGGER trigger_set_updated_at_contract
BEFORE UPDATE ON contract
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();


/*
Ver que tablas lo tienen aplicado

SELECT event_object_table AS table_name,
       trigger_name
FROM information_schema.triggers
WHERE trigger_name LIKE 'trigger_set_updated_at%';
*/