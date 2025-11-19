// The Open/Closed Principle means that once you write a piece of code, you should be able
//  to add new functionality to it without changing the existing code.

interface QueryGenerator {
  getReadingQuery: () => string;
  getWritingQuery: (data: string) => string;
}

class MySql implements QueryGenerator {
  getReadingQuery(): string {
    return "SELECT * FROM MySQL";
  }

  getWritingQuery(data: string) {
    return "INSERT INTO MySQL VALUES (($Ddata))";
  }
}
