import { ReactNode } from "react";
import { Button } from "react-bootstrap";

export interface TableColumn<T> {
  acessor?: keyof T;
  head: string; 
  isActionButton?: boolean;
  onActionClick?: (obj: T) => void;
}

interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
}

export default function CustomTable<T>(props: TableProps<T>) {
  return (
    <table className = "table tabl-bordered ">
      <thead>
        <tr>
          {props.columns.map((column, index) => {
            return <th key = {index}>{column.head}</th>;
          })}
        </tr>
      </thead> 
        <tbody>
          {props.data.map((item, index) => {
            return (
              <tr key = {index}>
                {props.columns.map((column, index) => {
                  return (
                    <td key = {index}>
                      {column.isActionButton ?  (
                        <Button variant = {column.head == "Do" ? "success" : "warning"} onClick = {() => column.onActionClick?.(item)}>
                          {column.head}
                        </Button>
                    ) 
                      :                        
                        item[column.acessor!] as ReactNode  
                    }
                    </td> 
                  );
                })}
              </tr>
            );
          })} 
        </tbody>
    </table>

  );

}
