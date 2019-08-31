import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');

matchReader.load();

const summary = Summary.winsAnalysisWinthHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
