import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";

import Nestable from "react-nestable";

import { initialItems } from "../constants/initialItems";

const App = () => {
  const [isBrowserEnvironment, setIsBrowserEnvironment] = useState(false);
  const [items, setItems] = useState(initialItems);
  const [editingItemTitle, setEditingTitle] = useState("");
  const [showEditModalFor, setShowEditModalFor] = useState(null);

  useEffect(() => {
    setIsBrowserEnvironment(true);
  }, []);

  if (!isBrowserEnvironment) {
    return null;
  }

  const updateItem = () => {
    setItems(items.map(recursivelyUpdateItems));
    setShowEditModalFor(null);
    setEditingTitle("");
  };

  const recursivelyUpdateItems = (item) => {
    if (item.id === showEditModalFor.id) {
      return { ...item, fromFramework: false, text: editingItemTitle };
    }

    if (item.children?.length > 0) {
      return { ...item, children: item.children.map(recursivelyUpdateItems) };
    }

    return item;
  };

  const renderEditModal = () => (
    <Modal
      show={true}
      onHide={() => {
        setShowEditModalFor(null);
      }}
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit {showEditModalFor.type}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Label>Title</Form.Label>
        <Form.Control
          onChange={(e) => setEditingTitle(e.target.value)}
          type="text"
          value={editingItemTitle || showEditModalFor.text}
        />
      </Modal.Body>

      <Modal.Footer>
        <button
          onClick={() => setShowEditModalFor(null)}
          style={{
            border: "1px solid #4992FF",
            borderRadius: "4px",
            backgroundColor: "#fff",
            color: "#4992FF",
            padding: "4px 8px",
            marginInlineEnd: "8px",
          }}
        >
          Fechar
        </button>

        <button
          onClick={updateItem}
          style={{
            border: "1px solid #4992FF",
            borderRadius: "4px",
            backgroundColor: "#4992FF",
            color: "#fff",
            padding: "4px 8px",
          }}
        >
          Salvar
        </button>
      </Modal.Footer>
    </Modal>
  );

  const renderItem = ({ depth, index, item }) => (
    <div style={itemStyles}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", marginBlockEnd: "8px" }}>
          {item.type === "topic" && (
            <Image
              alt=""
              src={item.fromFramework ? `/topic.svg` : `/topic-grayed-out.svg`}
              width={16}
              height={16}
            />
          )}

          {item.type === "goal" && (
            <Image
              alt=""
              src={item.fromFramework ? "/goal.svg" : "/goal-grayed-out.svg"}
              width={16}
              height={16}
            />
          )}

          <p style={{ marginInlineStart: "8px", fontWeight: 800 }}>
            {item.text}
          </p>
        </div>

        <div>
          {item.type !== "goal" && (
            <>
              <button
                onClick={() => setShowEditModalFor({ ...item, depth, index })}
                style={{
                  border: "1px solid #4992FF",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  color: "#4992FF",
                  padding: "4px 8px",
                  marginInlineEnd: "8px",
                }}
              >
                Editar
              </button>

              <button
                style={{
                  border: "1px solid #4992FF",
                  borderRadius: "4px",
                  backgroundColor: "#4992FF",
                  color: "#fff",
                  padding: "4px 8px",
                }}
              >
                Adicionar
              </button>
            </>
          )}
        </div>
      </div>

      {item.type !== "topic" && (
        <p
          style={{
            color: item.fromFramework ? "#9747FF" : "#737373",
            fontSize: "14px",
            marginInlineStart: "24px",
          }}
        >
          {item.subTitle}
        </p>
      )}
    </div>
  );

  const renderItems = () => (
    <>
      {showEditModalFor && renderEditModal()}

      <div style={containerStyles}>
        <Nestable
          items={items}
          onChange={(e) => setItems(e.items)}
          renderItem={renderItem}
        />
      </div>
    </>
  );

  return <div>{renderItems()}</div>;
};

const containerStyles = {
  maxWidth: "1000px",
  margin: "20px auto",
};

const itemStyles = {
  backgroundColor: "#FFF",
  cursor: "move",
  padding: "12px 10px",
  borderRadius: "4px",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.25)",
};

export default App;
