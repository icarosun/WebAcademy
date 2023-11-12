import { ReactNode } from "react";

export interface TableColumn<T> {
  acessor?: keyof T;
  head: string; 
}

interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
}

export default function CustomTable<T>(props: TableProps<T>) {
  return (
    <table className = "table tabl-bordered table-striped">
      <thead>
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
                      {item[column.acessor!] as ReactNode}
                    </td> 
                  );
                })}
              </tr>
            );
          })} 
        </tbody>
      </thead>
    </table>

  );

}
