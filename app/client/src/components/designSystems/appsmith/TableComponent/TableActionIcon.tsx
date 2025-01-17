import React from "react";
import { Tooltip } from "@blueprintjs/core";
import { IconWrapper } from "constants/IconConstants";
import { Colors } from "constants/Colors";
import { TableIconWrapper } from "components/designSystems/appsmith/TableComponent/TableStyledWrappers";

interface TableActionIconProps {
  tooltip: string;
  selected: boolean;
  selectMenu: (selected: boolean) => void;
  className: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

function TableActionIcon(props: TableActionIconProps) {
  return (
    <Tooltip
      autoFocus={false}
      content={props.tooltip}
      hoverOpenDelay={1000}
      modifiers={{
        preventOverflow: { enabled: false },
        flip: { enabled: false },
      }}
      position="top"
    >
      <TableIconWrapper
        className={props.className}
        onClick={(e) => {
          props.selectMenu(!props.selected);
          e.stopPropagation();
        }}
        selected={props.selected}
      >
        <IconWrapper
          color={props.selected ? Colors.OXFORD_BLUE : Colors.CADET_BLUE}
          height={20}
          width={20}
        >
          {props.children}
        </IconWrapper>
        {props.icon ? props.icon : null}
      </TableIconWrapper>
    </Tooltip>
  );
}

export default TableActionIcon;
