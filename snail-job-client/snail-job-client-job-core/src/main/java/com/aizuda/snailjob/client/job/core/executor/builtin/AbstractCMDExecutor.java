package com.aizuda.snailjob.client.job.core.executor.builtin;

import java.nio.charset.Charset;


public abstract class AbstractCMDExecutor extends AbstractScriptExecutor {

    @Override
    protected String getScriptName(Long jobId) {
        return String.format("cmd_%d.bat", jobId);
    }

    @Override
    protected String getRunCommand() {
        return "cmd.exe";
    }

    @Override
    protected Charset getCharset() {
        return Charset.defaultCharset();
    }

    @Override
    protected ProcessBuilder getScriptProcessBuilder(String scriptPath) {
        return new ProcessBuilder(getRunCommand(), "/c", scriptPath);
    }
}
