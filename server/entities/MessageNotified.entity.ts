import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from "typeorm";

export enum MessageType {
  INFO = "info",
  WARN = "warn",
  ERROR = "error",
}

@Entity()
export class MessageNotified {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "enum", enum: MessageType, default: MessageType.INFO })
  type: MessageType;

  @Column("text")
  message: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
