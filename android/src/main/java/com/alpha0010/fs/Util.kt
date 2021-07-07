package com.alpha0010.fs

import android.net.Uri
import java.io.File
import android.media.MediaPlayer
import java.io.FileInputStream

/**
 * Return a File object and do some basic sanitization of the passed path.
 */
fun parsePathToFile(path: String): File {
  return if (path.contains("://")) {
    try {
      val pathUri = Uri.parse(path)
      File(pathUri.path!!)
    } catch (e: Throwable) {
      File(path)
    }
  } else {
    File(path)
  }
}

fun getDuration(path: String): Int {
  val mp = MediaPlayer()
  val fd = FileInputStream(parsePathToFile(path)).fd
  mp.setDataSource(fd)
  mp.prepare()
  val length = mp.duration
  mp.release()
  return length
}

fun getMimeType(fileName: String): String {
  return when(fileName.split(".").last()) {
    "mp3" -> "audio/mpeg"
    "wav" -> "audio/wav"
    else -> "audio/*"
  }
}
