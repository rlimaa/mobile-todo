import { Avatar, Checkbox, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import React, { ChangeEvent } from "react";
import TodoProps from "../Types/TodoProps";

export default function TodoItem(props: TodoProps) 
{
    function onChange(e: ChangeEvent<HTMLInputElement>) {
        props.handleToggle(props.id)
    }

    return (
        <ListItem
          key={props.id}
          secondaryAction={
            <Checkbox
              edge="end"
              onChange={onChange}
              checked={props.completed}
            />
          }
          disablePadding
        >
          <ListItemButton>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${props.id}`}
                src={`/static/images/avatar/${props.id}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText primary={props.task} />
          </ListItemButton>
        </ListItem>
      );
}