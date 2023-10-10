/**
 * @fileoverview Defines logger.
 * @copyright Shingo OKAWA 2023
 */
import Chalk from 'chalk';

class Logger {
  private isError = (value: Error | string): value is Error => {
    return value instanceof Error;
  };

  private getMessage = (value: Error | string): string => {
    if (this.isError(value)) {
      return value?.message || value.toString();
    } else {
      return value as string;
    }
  };

  public log = (header: string, message = ''): void =>
    console.log(`${header} ${message}`);

  public info = (value: Error | string): void =>
    this.log(Chalk.blue(new Date(Date.now()), '[INFO]'), this.getMessage(value));

  public success = (value: Error | string): void =>
    this.log(Chalk.green(new Date(Date.now()), '[SUCCESS]'), this.getMessage(value));

  public warn = (value: Error | string): void =>
    this.log(Chalk.yellow(new Date(Date.now()), '[WARN]'), this.getMessage(value));

  public error = (value: Error | string): void =>
    this.log(Chalk.red(new Date(Date.now()), '[ERROR]'), this.getMessage(value));
}

const LOGGER = new Logger();

export default LOGGER;
